'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {

        const results = ['バニラ','チョコレート','抹茶','ストロベリー','✖'];

        // // const n =Math.floor(Math.random() * results.length);
        // // btn.textContent =results[n];

        // // 上の2行をまとめたもの
        btn.textContent =results[Math.floor(Math.random() * results.length)];

        // // 確率
        // const n = Math.random();
        // if (n < 0.05) {
        //     btn.textContent='大吉';
        // } else if (n < 0.2) {
        //     btn.textContent='中吉';
        // } else {
        //     btn.textContent='末吉';
        // }

        // switch (n) {
        //     case 0:
        //         btn.textContent = '大吉'
        //         break;
        //     case 1:
        //         btn.textContent = '中吉'
        //         break;
        //     case 2:
        //         btn.textContent = '凶'
        //         break;
        // }
    });
}

