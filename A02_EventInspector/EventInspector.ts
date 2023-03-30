namespace EventInspector {

    window.addEventListener('load', handleLoad);

    function handleLoad() {
        let div0: HTMLDivElement = <HTMLDivElement>document.getElementById('div0');
        let div1: HTMLDivElement = <HTMLDivElement>document.getElementById('div1');
        document.addEventListener('mousemove', setInfoBox);
        document.addEventListener('click', logInfo);
        document.addEventListener('keyup', logInfo);
        document.body.addEventListener('click', logInfo);
        document.body.addEventListener('keyup', logInfo);
        div0.addEventListener('click', logInfo);
        div0.addEventListener('keyup', logInfo);
        div1.addEventListener('click', logInfo);
        div1.addEventListener('keyup', logInfo);
    }











}