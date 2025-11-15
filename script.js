        function applyScaleToAll(scaleValue) {
            const layouts = document.querySelectorAll('.halfpage-1, .halfpage-2, .halfpage-3, .halfpage-4, .billboard-1, .billboard-2, .billboard-3, .billboard-4');

            layouts.forEach(layout => {
                const container = layout.closest('.creative-container');
                if (!container) return;

                // Garante posicionamento correto
                container.style.position = 'relative';
                layout.style.position = 'absolute';
                layout.style.left = '50%';
                layout.style.top = '50%';
                layout.style.transformOrigin = 'center center';
                layout.style.transform = `translate(-50%, -50%) scale(${scaleValue})`;

                // Descobre as dimensões reais automaticamente
                const rect = layout.getBoundingClientRect();
                const scaledWidth = rect.width;
                const scaledHeight = rect.height;

                // Ajusta o container para acompanhar o tamanho visível
                container.style.width = `${scaledWidth}px`;
                container.style.height = `${scaledHeight}px`;
            });
        }

        // Aplica um scale inicial
        applyScaleToAll(1);