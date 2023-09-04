document.addEventListener('DOMContentLoaded', function () {
    const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
        panel.addEventListener('mouseover', function () {
            this.style.flex = '5'; // This will make the panel take up 50% of the total window size
            const firstAndThirdPTags = this.querySelectorAll('p:nth-child(1), p:nth-child(3)');
            firstAndThirdPTags.forEach(pTag => pTag.style.transform = 'translateY(0)');
        });

        panel.addEventListener('mouseout', function () {
            this.style.flex = '1'; // This will return the panel to its original size
            const firstAndThirdPTags = this.querySelectorAll('p:nth-child(1), p:nth-child(3)');
            firstAndThirdPTags.forEach(pTag => pTag.style.transform = '');
        });
    });
});