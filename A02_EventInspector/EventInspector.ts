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
        document.addEventListener('hello', output);
    }
    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById('button');
    button.addEventListener('click', customevent);

    //_event=parameter
    function setInfoBox(_event: MouseEvent) {
        let span: HTMLElement = <HTMLElement>document.getElementById('span');
        let x: number = _event.clientX;
        let x1: number = x + 10;
        let y: number = _event.clientY;
        let y1: number = y + 10;
        //console.log(x);
        //console.log(y);
        span.innerHTML = 'x Position: ' + x + '    y Position: ' + y;
        span.style.position = 'fixed';
        span.style.top = `${y1}px`;
        span.style.left = `${x1}px`;//$lässt mich variable in string reinschreiben
    }
    //logInfo wird Event übergeben
    function logInfo(_event: Event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
    //mit document.getElementbyID durchsuche ich Element nach meinem Button mit der id 'button'



    function customevent(_event: MouseEvent) {
        const customeventnew = new CustomEvent('hello', {bubbles: true, detail: {}})//CustomEvent(custom=(maßgeschneidert) ist eine Funktion die mir eine Instanz eines Objekts vom Typ:Customevent erstellt(sagt mir z.B. dass ich Zootiere habe)
        button.dispatchEvent(customeventnew);
    }

    function output(_event: Event) {
        console.log(_event);
    }











}