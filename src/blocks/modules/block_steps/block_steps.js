import noUiSlider from 'nouislider';

const BlockSteps = class BlockSteps {
    constructor(){}
    nSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            const rangeSlider = document.getElementById('rangeSlider');
            const minInput = document.getElementById('minInput');
            const maxInput = document.getElementById('maxInput');
        
            noUiSlider.create(rangeSlider, {
                start: [50000, 1000000],
                connect: true,
                step: 50000,
                range: {
                    'min': 50000,
                    'max': 1000000
                }
            });
            rangeSlider.noUiSlider.on('update', (values, handle) => {
                const value = parseInt(values[handle]);
                if (handle === 0) {
                    minInput.value = value;
                } else {
                    maxInput.value = value;
                }
            });
        
            // Добавляем обработчик события change для minInput
            minInput.addEventListener('change', () => {
                rangeSlider.noUiSlider.set([minInput.value, null]);
            });
        
            // Добавляем обработчик события change для maxInput
            maxInput.addEventListener('change', () => {
                rangeSlider.noUiSlider.set([null, maxInput.value]);
            });
        
            // Добавляем обработчик события keydown для minInput
            minInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault(); // Предотвращаем нажатие Enter
                }
            });
        
            // Добавляем обработчик события keydown для maxInput
            maxInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault(); // Предотвращаем нажатие Enter
                }
            });
        });
    }
    init() {
        this.nSlider();
    }
}

export default BlockSteps;
