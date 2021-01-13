# Android
 ## Errors with com.appliedrec.verid:ui2:2.0.0-beta.05

### After capturing faces with Register user
```shell
    2021-01-13 17:13:32.194 9876-10408/com.appliedrec.veridreactnativesample E/KeyStore: Begin completed with exception
    java.lang.InterruptedException
    at java.util.concurrent.CompletableFuture.reportGet(CompletableFuture.java:351)
    at java.util.concurrent.CompletableFuture.get(CompletableFuture.java:1923)
    at android.security.KeyStore.begin(KeyStore.java:880)
    at android.security.keystore.AndroidKeyStoreCipherSpiBase.ensureKeystoreOperationInitialized(AndroidKeyStoreCipherSpiBase.java:248)
    at android.security.keystore.AndroidKeyStoreCipherSpiBase.engineInit(AndroidKeyStoreCipherSpiBase.java:148)
    at javax.crypto.Cipher.tryTransformWithProvider(Cipher.java:2980)
    at javax.crypto.Cipher.tryCombinations(Cipher.java:2891)
    at javax.crypto.Cipher$SpiAndProviderUpdater.updateAndGetSpiAndProvider(Cipher.java:2796)
    at javax.crypto.Cipher.chooseProvider(Cipher.java:773)
    at javax.crypto.Cipher.init(Cipher.java:1288)
    at javax.crypto.Cipher.init(Cipher.java:1223)
    at com.appliedrec.verid.core2.FaceTemplateEncryption.encryptFaceTemplate(FaceTemplateEncryption.java:81)
    at com.appliedrec.verid.core2.UserManagement.templateFromFace(UserManagement.java:142)
    at com.appliedrec.verid.core2.UserManagement.assignFacesToUser(UserManagement.java:213)
    at com.appliedrec.verid.core2.session.SessionFunctions.processSessionResult(SessionFunctions.java:122)
    at com.appliedrec.verid.core2.session.-$$Lambda$iSoydn3Xldz2aVZTUj8bPx0FnfI.apply(Unknown Source:4)
    at io.reactivex.rxjava3.internal.operators.single.SingleMap$MapSingleObserver.onSuccess(SingleMap.java:58)
    at io.reactivex.rxjava3.internal.operators.flowable.FlowableLastSingle$LastSubscriber.onComplete(FlowableLastSingle.java:103)
    at io.reactivex.rxjava3.internal.operators.flowable.FlowableOnErrorReturn$OnErrorReturnSubscriber.onComplete(FlowableOnErrorReturn.java:69)
    at io.reactivex.rxjava3.internal.operators.flowable.FlowableScanSeed$ScanSeedSubscriber.drain(FlowableScanSeed.java:198)
    at io.reactivex.rxjava3.internal.operators.flowable.FlowableScanSeed$ScanSeedSubscriber.onComplete(FlowableScanSeed.java:142)
    at io.reactivex.rxjava3.internal.operators.flowable.FlowableTake$TakeSubscriber.onNext(FlowableTake.java:77)
    at io.reactivex.rxjava3.internal.util.HalfSerializer.onNext(HalfSerializer.java:45)
    at io.reactivex.rxjava3.internal.operators.flowable.FlowableTakeUntil$TakeUntilMainSubscriber.onNext(FlowableTakeUntil.java:70)
    at io.reactivex.rxjava3.internal.operators.flowable.FlowableDoAfterNext$DoAfterSubscriber.onNext(FlowableDoAfterNext.java:62)
    at io.reactivex.rxjava3.internal.operators.flowable.FlowableFlatMap$MergeSubscriber.tryEmit(FlowableFlatMap.java:271)
    at io.reactivex.rxjava3.internal.operators.flowable.FlowableFlatMap$InnerSubscriber.onNext(FlowableFlatMap.java:628)
    at io.reactivex.rxjava3.internal.operators.flowable.FlowableSubscribeOn$SubscribeOnSubscriber.onNext(FlowableSubscribeOn.java:97)
    at io.reactivex.rxjava3.internal.operators.flowable.FlowableCreate$BufferAsyncEmitter.drain(FlowableCreate.java:550)
    at io.reactivex.rxjava3.internal.operators.flowable.FlowableCreate$BufferAsyncEmitter.onNext(FlowableCreate.java:478)
    at com.appliedrec.verid.core2.session.Session.lambda$null$4$Session(Session.java:200)
    at com.appliedrec.verid.core2.session.-$$Lambda$Session$qp8PKzkzmQ2lXGz2DSllEGCSC4g.subscribe(Unknown Source:4)
    at io.reactivex.rxjava3.internal.operators.flowable.FlowableCreate.subscribeActual(FlowableCreate.java:71)
    at io.reactivex.rxjava3.core.Flowable.subscribe(Flowable.java:15838)
    at io.reactivex.rxjava3.core.Flowable.subscribe(Flowable.java:15784)
    at io.reactivex.rxjava3.internal.operators.flowable.FlowableSubscribeOn$SubscribeOnSubscriber.run(FlowableSubscribeOn.java:82)
    at io.reactivex.rxjava3.internal.schedulers.ScheduledRunnable.run(ScheduledRunnable.java:65)
    at io.reactivex.rxjava3.internal.schedulers.ScheduledRunnable.call(ScheduledRunnable.java:56)
    at java.util.concurrent.FutureTask.run(FutureTask.java:266)
    at java.util.concurrent.ScheduledThreadPoolExecutor$ScheduledFutureTask.run(ScheduledThreadPoolExecutor.java:301)
    2021-01-13 17:13:32.195 9876-10408/com.appliedrec.veridreactnativesample E/KeyStore:     at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1167)
    at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:641)
    at java.lang.Thread.run(Thread.java:919)
```

### After capturing faces with capture live face

`No error in log and no session result returned to plugin`

## Could be related to changes on gradle version

### Running unit tests causes the app to crash

```shell
2021-01-13 17:36:46.909 12777-22509/com.appliedrec.veridreactnativesample E/libc++abi: terminating with uncaught exception of type std::runtime_error: logging not available for section entry
```
