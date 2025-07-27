function goToHome() {
            var message = document.getElementById('message');
            message.classList.add('fade-out');
            setTimeout(function() {
                message.style.display = 'none';
                message.classList.remove('fade-out');
            }, 1000);
            
            var heart = document.getElementById('heart');
            heart.classList.remove('heart-clicked');
            
            var gifContainer = document.getElementById('gif-container');
            gifContainer.style.display = 'none';
        }
        
        document.getElementById('heart').addEventListener('click', function() {
            var heart = document.getElementById('heart');
            heart.classList.add('heart-clicked');
            
            var message = document.getElementById('message');
            message.style.display = 'block';
            setTimeout(function() {
                message.style.opacity = '1';
            }, 100);
            
            var gifContainer = document.getElementById('gif-container');
            gifContainer.style.display = 'flex';
        });