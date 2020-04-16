"use strict";
import data from './data/achievements-data.js';

class Achievements {
    constructor( target ) {
        this.target = target;
        this.render();
    }

    render() {
        const DOM = document.querySelector(this.target);
        if ( !DOM ) {
            throw 'ERROR: OMG.. go fix Achievements!!';
        }

        let HTML = '';

        for ( let i=0; i<data.length; i++ ) {
            const ach = data[i];
            HTML += `
                <div class="col-3 achievement">
                    <i class="fa fa-${ach.icon}"></i>
                    <div class="number">${ach.number}</div>
                    <h4>${ach.title}</h4>
                </div>`;
        }
        DOM.innerHTML = HTML;
    }
}

export default Achievements;