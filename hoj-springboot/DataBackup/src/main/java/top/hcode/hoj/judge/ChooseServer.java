package top.hcode.hoj.judge;

import com.alibaba.cloud.nacos.NacosDiscoveryProperties;
import com.alibaba.nacos.api.exception.NacosException;
import com.alibaba.nacos.api.naming.NamingService;
import com.alibaba.nacos.api.naming.pojo.Instance;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import top.hcode.hoj.pojo.entity.JudgeServer;
import top.hcode.hoj.service.impl.JudgeServerServiceImpl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * @Author: Himit_ZH
 * @Date: 2021/5/24 17:30
 * @Description: 筛选可用判题机
 */
@Component
@Slf4j(topic = "hoj")
public class ChooseServer {

    @Autowired
    private NacosDiscoveryProperties discoveryProperties;

    @Value("${service-url.name}")
    private String JudgeServiceName;

    @Autowired
    private JudgeServerServiceImpl judgeServerService;

    /**
     * @param
     * @MethodName chooseServer
     * @Description 选择可以用调用判题的判题服务器
     * @Return
     * @Since 2021/4/15
     */
    @Transactional
    public JudgeServer choose(Boolean isRemote) {
        // 获取该微服务的所有健康实例
        List<Instance> instances = getInstances(JudgeServiceName);
        if (instances.size() <= 0) {
            return null;
        }
        List<String> keyList = new ArrayList<>();
        // 获取当前健康实例取出ip和port拼接
        for (Instance instance : instances) {
            keyList.add(instance.getIp() + ":" + instance.getPort());
        }

        // 过滤出小于或等于规定最大并发判题任务数的服务实例且健康的判题机
        QueryWrapper<JudgeServer> judgeServerQueryWrapper = new QueryWrapper<>();
        judgeServerQueryWrapper
                .in("url", keyList)
                .eq("is_remote", isRemote)
                .orderByAsc("task_number")
                .last("for update"); // 开启悲观锁
        List<JudgeServer> judgeServerList = judgeServerService.list(judgeServerQueryWrapper);
        // 获取可用判题机
        for (JudgeServer judgeServer : judgeServerList) {
            if (judgeServer.getTaskNumber() < judgeServer.getMaxTaskNumber()) {
                judgeServer.setTaskNumber(judgeServer.getTaskNumber() + 1);
                boolean isOk = judgeServerService.updateById(judgeServer);
                if (isOk) {
                    return judgeServer;
                }
            }
        }
        return null;
    }


    /**
     * @param serviceId
     * @MethodName getInstances
     * @Description 根据服务id获取对应的健康实例列表
     * @Return
     * @Since 2021/4/15
     */
    private List<Instance> getInstances(String serviceId) {
        // 获取服务发现的相关API
        NamingService namingService = discoveryProperties.namingServiceInstance();
        try {
            // 获取该微服务的所有健康实例
            return namingService.selectInstances(serviceId, true);
        } catch (NacosException e) {
            log.error("获取微服务健康实例发生异常--------->{}", e);
            return Collections.emptyList();
        }
    }

}