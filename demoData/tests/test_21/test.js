var test = {"name":"Test Details","description":"This is test documentation","timestamp":"2014/07/01 at 15:57:53","duration":0,"parameters":{"Date":"Tue Jul 01 15\\:56\\:10 IDT 2014","File":".","Str":"Some string","I":"5"},"properties":{"Test Documentation":"This is test documentation","Class":"org.jsystem.new_report_example.TestsExamples","Class Documentation":"My Class documentation1!!","Breadcrumb":"root-->s0-->s1-->s2-->Test Details"},"reportElements":[{"title":" Only title","message":null,"status":"success","type":"regular","time":"15:57:53:"},{"title":" Title with message that was successful","message":"message","status":"success","type":"regular","time":"15:57:53:"},{"title":" Title with message which faile","message":"message","status":"failure","type":"regular","time":"15:57:53:"},{"title":"This is the link title","message":"myText.txt","status":"success","type":"lnk","time":"15:57:53:"},{"title":"Start level","message":null,"status":"success","type":"startLevel","time":"15:57:53:"},{"title":" In level 1","message":null,"status":"success","type":"regular","time":"15:57:53:"},{"title":" In level 1","message":null,"status":"success","type":"regular","time":"15:57:53:"},{"title":"Start level 2","message":null,"status":"success","type":"startLevel","time":"15:57:54:"},{"title":" In level2","message":null,"status":"success","type":"regular","time":"15:57:53:"},{"title":null,"message":null,"status":"success","type":"stopLevel","time":"15:57:54:"},{"title":null,"message":null,"status":"success","type":"stopLevel","time":"15:57:54:"},{"title":"Start time: Tue Jul 01 15:57:53 IDT 2014","message":null,"status":"success","type":"regular","time":"15:57:54:"},{"title":"End time  : Tue Jul 01 15:57:54 IDT 2014","message":null,"status":"success","type":"regular","time":"15:57:54:"},{"title":"Test running time: 0 sec.","message":null,"status":"success","type":"regular","time":"15:57:54:"},{"title":" Fail report was submitted","message":"junit.framework.AssertionFailedError: Fail report was submitted\r\n\tat junit.framework.JSystemJUnit4ClassRunner.jsystemEndTest(JSystemJUnit4ClassRunner.java:212)\r\n\tat junit.framework.JSystemJUnit4ClassRunner.access$100(JSystemJUnit4ClassRunner.java:31)\r\n\tat junit.framework.JSystemJUnit4ClassRunner$TestListenerAdapter.testFinished(JSystemJUnit4ClassRunner.java:165)\r\n\tat org.junit.runner.notification.RunNotifier$7.notifyListener(RunNotifier.java:145)\r\n\tat org.junit.runner.notification.RunNotifier$SafeNotifier.run(RunNotifier.java:41)\r\n\tat org.junit.runner.notification.RunNotifier.fireTestFinished(RunNotifier.java:142)\r\n\tat org.junit.internal.runners.MethodRoadie.run(MethodRoadie.java:51)\r\n\tat org.junit.internal.runners.JUnit4ClassRunner.invokeTestMethod(JUnit4ClassRunner.java:98)\r\n\tat org.junit.internal.runners.JUnit4ClassRunner.runMethods(JUnit4ClassRunner.java:61)\r\n\tat org.junit.internal.runners.JUnit4ClassRunner$1.run(JUnit4ClassRunner.java:54)\r\n\tat org.junit.internal.runners.ClassRoadie.runUnprotected(ClassRoadie.java:34)\r\n\tat org.junit.internal.runners.ClassRoadie.runProtected(ClassRoadie.java:44)\r\n\tat org.junit.internal.runners.JUnit4ClassRunner.run(JUnit4ClassRunner.java:52)\r\n\tat junit.framework.JSystemJUnit4ClassRunner.run(JSystemJUnit4ClassRunner.java:250)\r\n\tat junit.framework.JUnit4TestAdapterForJSystem.run(JUnit4TestAdapterForJSystem.java:86)\r\n\tat com.aqua.anttask.jsystem.JUnitTestRunner.run(JUnitTestRunner.java:461)\r\n\tat com.aqua.anttask.jsystem.JSystemTask.executeInVM(JSystemTask.java:1388)\r\n\tat com.aqua.anttask.jsystem.JSystemTask.execute(JSystemTask.java:957)\r\n\tat com.aqua.anttask.jsystem.JSystemTask.executeOrQueue(JSystemTask.java:1806)\r\n\tat com.aqua.anttask.jsystem.JSystemTask.execute(JSystemTask.java:897)\r\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\r\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\r\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\r\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\r\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\r\n\tat org.apache.tools.ant.helper.SingleCheckExecutor.executeTargets(SingleCheckExecutor.java:38)\r\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\r\n\tat org.apache.tools.ant.taskdefs.Ant.execute(Ant.java:416)\r\n\tat net.sf.antcontrib.logic.AntCallBack.execute(AntCallBack.java:54)\r\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\r\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\r\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\r\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\r\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\r\n\tat org.apache.tools.ant.helper.SingleCheckExecutor.executeTargets(SingleCheckExecutor.java:38)\r\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\r\n\tat org.apache.tools.ant.taskdefs.Ant.execute(Ant.java:416)\r\n\tat com.aqua.anttask.jsystem.JSystemAntTask.execute(JSystemAntTask.java:88)\r\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\r\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\r\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\r\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\r\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\r\n\tat org.apache.tools.ant.helper.SingleCheckExecutor.executeTargets(SingleCheckExecutor.java:38)\r\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\r\n\tat org.apache.tools.ant.taskdefs.Ant.execute(Ant.java:416)\r\n\tat net.sf.antcontrib.logic.AntCallBack.execute(AntCallBack.java:54)\r\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\r\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\r\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\r\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\r\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\r\n\tat org.apache.tools.ant.helper.SingleCheckExecutor.executeTargets(SingleCheckExecutor.java:38)\r\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\r\n\tat org.apache.tools.ant.taskdefs.Ant.execute(Ant.java:416)\r\n\tat com.aqua.anttask.jsystem.JSystemAntTask.execute(JSystemAntTask.java:88)\r\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\r\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\r\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\r\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\r\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\r\n\tat org.apache.tools.ant.helper.SingleCheckExecutor.executeTargets(SingleCheckExecutor.java:38)\r\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\r\n\tat org.apache.tools.ant.taskdefs.Ant.execute(Ant.java:416)\r\n\tat net.sf.antcontrib.logic.AntCallBack.execute(AntCallBack.java:54)\r\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\r\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\r\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\r\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\r\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\r\n\tat org.apache.tools.ant.helper.SingleCheckExecutor.executeTargets(SingleCheckExecutor.java:38)\r\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\r\n\tat org.apache.tools.ant.taskdefs.Ant.execute(Ant.java:416)\r\n\tat com.aqua.anttask.jsystem.JSystemAntTask.execute(JSystemAntTask.java:88)\r\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\r\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\r\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\r\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\r\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\r\n\tat org.apache.tools.ant.helper.SingleCheckExecutor.executeTargets(SingleCheckExecutor.java:38)\r\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\r\n\tat org.apache.tools.ant.taskdefs.Ant.execute(Ant.java:416)\r\n\tat net.sf.antcontrib.logic.AntCallBack.execute(AntCallBack.java:54)\r\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\r\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\r\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\r\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\r\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\r\n\tat org.apache.tools.ant.Project.executeTarget(Project.java:1298)\r\n\tat org.apache.tools.ant.helper.DefaultExecutor.executeTargets(DefaultExecutor.java:41)\r\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\r\n\tat org.apache.tools.ant.Main.runBuild(Main.java:698)\r\n\tat org.apache.tools.ant.Main.startAnt(Main.java:199)\r\n\tat org.apache.tools.ant.launch.Launcher.run(Launcher.java:257)\r\n\tat org.apache.tools.ant.launch.Launcher.main(Launcher.java:104)\r\n","status":"failure","type":"regular","time":"15:57:54:"},{"title":" Fixture: root failTearDown","message":null,"status":"success","type":"step","time":"15:57:53:"},{"title":" Failure in Test org.jsystem.new_report_example.TestsExamples.testWithDifferentElements","message":null,"status":"failure","type":"regular","time":"15:57:53:"}]};