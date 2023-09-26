const BlockSteps = class BlockSteps {
    constructor(){}
    stepMove() {
        document.addEventListener('DOMContentLoaded', () => {
            let currentStep = 1;

            function showStep(stepNumber) {
              const steps = document.querySelectorAll('.block_steps__r-side');
              if (stepNumber >= 1 && stepNumber <= steps.length) {
                steps.forEach(step => {
                  step.classList.add('hidden');
                });
                steps[stepNumber - 1].classList.remove('hidden');
                currentStep = stepNumber;
                updateButtonsVisibility();
              }
            }
        
            function onSliderChange(stepNumber) {
              showStep(parseInt(stepNumber));
            }
        
            function updateButtonsVisibility() {
              const backButton = document.querySelector('.buttons .back-button');
              const nextButton = document.querySelector('.buttons .next-button');
        
              backButton.disabled = currentStep === 1;
              nextButton.disabled = currentStep === 3;
            }
        
            showStep(currentStep);
        });
    }
    init() {
        this.stepMove();
    }
}

export default BlockSteps;