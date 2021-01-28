# Android
 ## Issues with com.appliedrec.verid:ui2:2.0.0-beta.08 -- UPDATED 28/01/2021

### CaptureLiveFace returned wrong structure
Session object returned *facesGroup* instead of *attachments* attribute, see [SessionResult](src/classes/SessionResult.tsx)


DetectedFace is a bit different too, see [DetectedFace](src/classes/DetectedFace.tsx)
, response sample:
```js
{
  "image": "...",
  "face": "...",
  "bearing": "STRAIGHT",
  "diagnosticInfo": {
    "maskScore": 0.00007371109,
    "brightness": 148.32147943037975,
    "contrast": 37.42391053555615,
    "sharpness": 3.8914034823198613
  }
}
```
### Different errors after capturing faces with Register user
```shell
 com.appliedrec.verid.core2.VerIDCoreException: java.security.UnrecoverableKeyException: Failed to obtain information about key
        at com.appliedrec.verid.core2.FaceTemplateEncryption.encryptFaceTemplate(FaceTemplateEncryption.java:88)
        at com.appliedrec.verid.core2.UserManagement.templateFromFace(UserManagement.java:142)
        at com.appliedrec.verid.core2.UserManagement.assignFacesToUser(UserManagement.java:213)
        at com.appliedrec.verid.core2.session.SessionFunctions.processSessionResult(SessionFunctions.java:123)
        at com.appliedrec.verid.core2.session.-$$Lambda$iSoydn3Xldz2aVZTUj8bPx0FnfI.apply(Unknown Source:4)
        at io.reactivex.rxjava3.internal.operators.single.SingleMap$MapSingleObserver.onSuccess(SingleMap.java:58)
        at io.reactivex.rxjava3.internal.operators.single.SingleOnErrorReturn$OnErrorReturn.onSuccess(SingleOnErrorReturn.java:82)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableCollectSingle$CollectSubscriber.onComplete(FlowableCollectSingle.java:119)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableTake$TakeSubscriber.onNext(FlowableTake.java:77)
        at io.reactivex.rxjava3.internal.util.HalfSerializer.onNext(HalfSerializer.java:45)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableTakeUntil$TakeUntilMainSubscriber.onNext(FlowableTakeUntil.java:70)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableDoAfterNext$DoAfterSubscriber.onNext(FlowableDoAfterNext.java:62)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableFlatMap$MergeSubscriber.tryEmit(FlowableFlatMap.java:271)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableFlatMap$InnerSubscriber.onNext(FlowableFlatMap.java:628)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableSubscribeOn$SubscribeOnSubscriber.onNext(FlowableSubscribeOn.java:97)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableCreate$BufferAsyncEmitter.drain(FlowableCreate.java:550)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableCreate$BufferAsyncEmitter.onNext(FlowableCreate.java:478)
        at com.appliedrec.verid.core2.session.Session.lambda$null$4$Session(Session.java:195)
        at com.appliedrec.verid.core2.session.-$$Lambda$Session$qp8PKzkzmQ2lXGz2DSllEGCSC4g.subscribe(Unknown Source:4)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableCreate.subscribeActual(FlowableCreate.java:71)
        at io.reactivex.rxjava3.core.Flowable.subscribe(Flowable.java:15838)
        at io.reactivex.rxjava3.core.Flowable.subscribe(Flowable.java:15784)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableSubscribeOn$SubscribeOnSubscriber.run(FlowableSubscribeOn.java:82)
        at io.reactivex.rxjava3.internal.schedulers.ScheduledRunnable.run(ScheduledRunnable.java:65)
        at io.reactivex.rxjava3.internal.schedulers.ScheduledRunnable.call(ScheduledRunnable.java:56)
        at java.util.concurrent.FutureTask.run(FutureTask.java:266)
        at java.util.concurrent.ScheduledThreadPoolExecutor$ScheduledFutureTask.run(ScheduledThreadPoolExecutor.java:301)
        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1167)
        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:641)
        at java.lang.Thread.run(Thread.java:919)
     Caused by: java.security.UnrecoverableKeyException: Failed to obtain information about key
        at android.security.keystore.AndroidKeyStoreProvider.getKeyCharacteristics(AndroidKeyStoreProvider.java:242)
        at android.security.keystore.AndroidKeyStoreProvider.loadAndroidKeyStoreKeyFromKeystore(AndroidKeyStoreProvider.java:364)
        at android.security.keystore.AndroidKeyStoreSpi.engineGetKey(AndroidKeyStoreSpi.java:105)
        at java.security.KeyStore.getKey(KeyStore.java:1062)
        at com.appliedrec.verid.core2.FaceTemplateEncryption.getSecretKey(FaceTemplateEncryption.java:141)
        at com.appliedrec.verid.core2.FaceTemplateEncryption.encryptFaceTemplate(FaceTemplateEncryption.java:81)
        at com.appliedrec.verid.core2.UserManagement.templateFromFace(UserManagement.java:142) 
        at com.appliedrec.verid.core2.UserManagement.assignFacesToUser(UserManagement.java:213) 
        at com.appliedrec.verid.core2.session.SessionFunctions.processSessionResult(SessionFunctions.java:123) 
        at com.appliedrec.verid.core2.session.-$$Lambda$iSoydn3Xldz2aVZTUj8bPx0FnfI.apply(Unknown Source:4) 
        at io.reactivex.rxjava3.internal.operators.single.SingleMap$MapSingleObserver.onSuccess(SingleMap.java:58) 
        at io.reactivex.rxjava3.internal.operators.single.SingleOnErrorReturn$OnErrorReturn.onSuccess(SingleOnErrorReturn.java:82) 
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableCollectSingle$CollectSubscriber.onComplete(FlowableCollectSingle.java:119) 
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableTake$TakeSubscriber.onNext(FlowableTake.java:77) 
        at io.reactivex.rxjava3.internal.util.HalfSerializer.onNext(HalfSerializer.java:45) 
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableTakeUntil$TakeUntilMainSubscriber.onNext(FlowableTakeUntil.java:70) 
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableDoAfterNext$DoAfterSubscriber.onNext(FlowableDoAfterNext.java:62) 
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableFlatMap$MergeSubscriber.tryEmit(FlowableFlatMap.java:271) 
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableFlatMap$InnerSubscriber.onNext(FlowableFlatMap.java:628) 
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableSubscribeOn$SubscribeOnSubscriber.onNext(FlowableSubscribeOn.java:97) 
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableCreate$BufferAsyncEmitter.drain(FlowableCreate.java:550) 
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableCreate$BufferAsyncEmitter.onNext(FlowableCreate.java:478) 
        at com.appliedrec.verid.core2.session.Session.lambda$null$4$Session(Session.java:195) 
        at com.appliedrec.verid.core2.session.-$$Lambda$Session$qp8PKzkzmQ2lXGz2DSllEGCSC4g.subscribe(Unknown Source:4) 
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableCreate.subscribeActual(FlowableCreate.java:71) 
        at io.reactivex.rxjava3.core.Flowable.subscribe(Flowable.java:15838) 
        at io.reactivex.rxjava3.core.Flowable.subscribe(Flowable.java:15784) 
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableSubscribeOn$SubscribeOnSubscriber.run(FlowableSubscribeOn.java:82) 
        at io.reactivex.rxjava3.internal.schedulers.ScheduledRunnable.run(ScheduledRunnable.java:65) 
        at io.reactivex.rxjava3.internal.schedulers.ScheduledRunnable.call(ScheduledRunnable.java:56) 
        at java.util.concurrent.FutureTask.run(FutureTask.java:266) 
        at java.util.concurrent.ScheduledThreadPoolExecutor$ScheduledFutureTask.run(ScheduledThreadPoolExecutor.java:301) 
        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1167) 
        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:641) 
        at java.lang.Thread.run(Thread.java:919) 
     Caused by: android.security.KeyStoreException: System error
```
```js
{ code: 'FACE_DETECTION_EVALUATION_ERROR',
      cause:
       { 'com.appliedrec.verid.core2.VerIDCoreException':
          { code: 'FACE_TEMPLATE_ENCRYPTION_ERROR',
            cause: 'Failed to obtain information about key' } } }
```
```shell
2021-01-28 15:57:34.132 14620-19328/com.appliedrec.veridreactnativesample E/KeyStore: GetKeyCharacteristics completed with exception
    java.lang.InterruptedException
        at java.util.concurrent.CompletableFuture.reportGet(CompletableFuture.java:351)
        at java.util.concurrent.CompletableFuture.get(CompletableFuture.java:1923)
        at android.security.KeyStore.getKeyCharacteristics(KeyStore.java:630)
        at android.security.keystore.AndroidKeyStoreProvider.getKeyCharacteristics(AndroidKeyStoreProvider.java:233)
        at android.security.keystore.AndroidKeyStoreProvider.loadAndroidKeyStoreKeyFromKeystore(AndroidKeyStoreProvider.java:364)
        at android.security.keystore.AndroidKeyStoreSpi.engineGetKey(AndroidKeyStoreSpi.java:105)
        at java.security.KeyStore.getKey(KeyStore.java:1062)
        at com.appliedrec.verid.core2.FaceTemplateEncryption.getSecretKey(FaceTemplateEncryption.java:141)
        at com.appliedrec.verid.core2.FaceTemplateEncryption.encryptFaceTemplate(FaceTemplateEncryption.java:81)
        at com.appliedrec.verid.core2.UserManagement.templateFromFace(UserManagement.java:142)
        at com.appliedrec.verid.core2.UserManagement.assignFacesToUser(UserManagement.java:213)
        at com.appliedrec.verid.core2.session.SessionFunctions.processSessionResult(SessionFunctions.java:123)
        at com.appliedrec.verid.core2.session.-$$Lambda$iSoydn3Xldz2aVZTUj8bPx0FnfI.apply(Unknown Source:4)
        at io.reactivex.rxjava3.internal.operators.single.SingleMap$MapSingleObserver.onSuccess(SingleMap.java:58)
        at io.reactivex.rxjava3.internal.operators.single.SingleOnErrorReturn$OnErrorReturn.onSuccess(SingleOnErrorReturn.java:82)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableCollectSingle$CollectSubscriber.onComplete(FlowableCollectSingle.java:119)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableTake$TakeSubscriber.onNext(FlowableTake.java:77)
        at io.reactivex.rxjava3.internal.util.HalfSerializer.onNext(HalfSerializer.java:45)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableTakeUntil$TakeUntilMainSubscriber.onNext(FlowableTakeUntil.java:70)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableDoAfterNext$DoAfterSubscriber.onNext(FlowableDoAfterNext.java:62)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableFlatMap$MergeSubscriber.tryEmit(FlowableFlatMap.java:271)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableFlatMap$InnerSubscriber.onNext(FlowableFlatMap.java:628)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableSubscribeOn$SubscribeOnSubscriber.onNext(FlowableSubscribeOn.java:97)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableCreate$BufferAsyncEmitter.drain(FlowableCreate.java:550)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableCreate$BufferAsyncEmitter.onNext(FlowableCreate.java:478)
        at com.appliedrec.verid.core2.session.Session.lambda$null$4$Session(Session.java:195)
        at com.appliedrec.verid.core2.session.-$$Lambda$Session$qp8PKzkzmQ2lXGz2DSllEGCSC4g.subscribe(Unknown Source:4)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableCreate.subscribeActual(FlowableCreate.java:71)
        at io.reactivex.rxjava3.core.Flowable.subscribe(Flowable.java:15838)
        at io.reactivex.rxjava3.core.Flowable.subscribe(Flowable.java:15784)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableSubscribeOn$SubscribeOnSubscriber.run(FlowableSubscribeOn.java:82)
        at io.reactivex.rxjava3.internal.schedulers.ScheduledRunnable.run(ScheduledRunnable.java:65)
        at io.reactivex.rxjava3.internal.schedulers.ScheduledRunnable.call(ScheduledRunnable.java:56)
        at java.util.concurrent.FutureTask.run(FutureTask.java:266)
        at java.util.concurrent.ScheduledThreadPoolExecutor$ScheduledFutureTask.run(ScheduledThreadPoolExecutor.java:301)
        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1167)
        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:641)
        at java.lang.Thread.run(Thread.java:919)
```
```shell
    com.appliedrec.verid.core2.VerIDCoreException: java.security.ProviderException: Keystore operation failed
        at com.appliedrec.verid.core2.FaceTemplateEncryption.encryptFaceTemplate(FaceTemplateEncryption.java:88)
        at com.appliedrec.verid.core2.UserManagement.templateFromFace(UserManagement.java:142)
        at com.appliedrec.verid.core2.UserManagement.assignFacesToUser(UserManagement.java:213)
        at com.appliedrec.verid.core2.session.SessionFunctions.processSessionResult(SessionFunctions.java:123)
        at com.appliedrec.verid.core2.session.-$$Lambda$iSoydn3Xldz2aVZTUj8bPx0FnfI.apply(Unknown Source:4)
        at io.reactivex.rxjava3.internal.operators.single.SingleMap$MapSingleObserver.onSuccess(SingleMap.java:58)
        at io.reactivex.rxjava3.internal.operators.single.SingleOnErrorReturn$OnErrorReturn.onSuccess(SingleOnErrorReturn.java:82)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableCollectSingle$CollectSubscriber.onComplete(FlowableCollectSingle.java:119)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableTake$TakeSubscriber.onNext(FlowableTake.java:77)
        at io.reactivex.rxjava3.internal.util.HalfSerializer.onNext(HalfSerializer.java:45)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableTakeUntil$TakeUntilMainSubscriber.onNext(FlowableTakeUntil.java:70)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableDoAfterNext$DoAfterSubscriber.onNext(FlowableDoAfterNext.java:62)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableFlatMap$MergeSubscriber.tryEmit(FlowableFlatMap.java:271)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableFlatMap$InnerSubscriber.onNext(FlowableFlatMap.java:628)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableSubscribeOn$SubscribeOnSubscriber.onNext(FlowableSubscribeOn.java:97)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableCreate$BufferAsyncEmitter.drain(FlowableCreate.java:550)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableCreate$BufferAsyncEmitter.onNext(FlowableCreate.java:478)
        at com.appliedrec.verid.core2.session.Session.lambda$null$4$Session(Session.java:195)
        at com.appliedrec.verid.core2.session.-$$Lambda$Session$qp8PKzkzmQ2lXGz2DSllEGCSC4g.subscribe(Unknown Source:4)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableCreate.subscribeActual(FlowableCreate.java:71)
        at io.reactivex.rxjava3.core.Flowable.subscribe(Flowable.java:15838)
        at io.reactivex.rxjava3.core.Flowable.subscribe(Flowable.java:15784)
        at io.reactivex.rxjava3.internal.operators.flowable.FlowableSubscribeOn$SubscribeOnSubscriber.run(FlowableSubscribeOn.java:82)
        at io.reactivex.rxjava3.internal.schedulers.ScheduledRunnable.run(ScheduledRunnable.java:65)
        at io.reactivex.rxjava3.internal.schedulers.ScheduledRunnable.call(ScheduledRunnable.java:56)
        at java.util.concurrent.FutureTask.run(FutureTask.java:266)
        at java.util.concurrent.ScheduledThreadPoolExecutor$ScheduledFutureTask.run(ScheduledThreadPoolExecutor.java:301)
        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1167)
        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:641)
        at java.lang.Thread.run(Thread.java:919)
```

``` js
{ code: 'FACE_DETECTION_EVALUATION_ERROR',
      cause:
       { 'com.appliedrec.verid.core2.VerIDCoreException':
          { code: 'FACE_TEMPLATE_ENCRYPTION_ERROR',
            cause: 'Keystore operation failed' } } }
```
### Sometimes session doesn't return result to plugin

I see this log that could be related
```shell
2021-01-28 15:51:07.686 14620-14635/com.appliedrec.veridreactnativesample W/MessageQueue: Handler (android.os.Handler) {1627cbe} sending message to a Handler on a dead thread
    java.lang.IllegalStateException: Handler (android.os.Handler) {1627cbe} sending message to a Handler on a dead thread
        at android.os.MessageQueue.enqueueMessage(MessageQueue.java:558)
        at android.os.Handler.enqueueMessage(Handler.java:754)
        at android.os.Handler.sendMessageAtTime(Handler.java:703)
        at android.os.Handler.sendMessageDelayed(Handler.java:673)
        at android.os.Handler.post(Handler.java:403)
        at android.hardware.camera2.impl.CameraDeviceImpl$CameraHandlerExecutor.execute(CameraDeviceImpl.java:2487)
        at android.hardware.camera2.impl.CallbackProxies$SessionStateCallbackProxy.onClosed(CallbackProxies.java:104)
        at android.hardware.camera2.impl.CameraCaptureSessionImpl.close(CameraCaptureSessionImpl.java:536)
        at android.hardware.camera2.impl.CameraCaptureSessionImpl.finalize(CameraCaptureSessionImpl.java:827)
        at java.lang.Daemons$FinalizerDaemon.doFinalize(Daemons.java:289)
        at java.lang.Daemons$FinalizerDaemon.runInternal(Daemons.java:276)
        at java.lang.Daemons$Daemon.run(Daemons.java:137)
        at java.lang.Thread.run(Thread.java:919)
2021-01-28 15:51:07.686 14620-14635/com.appliedrec.veridreactnativesample W/System: A resource failed to call release.
```

# Issues Fixed

1. Automatic test run now without problem.
1. stretched camera previews.
1. onSessionFinished is being call now after capturing faces
   (register, authenticate, capturingLiveFace), but still exist an issue that sometimes it doesn't.
