        document.addEventListener('DOMContentLoaded', function() {
            const publicView = document.getElementById('public-view');
            const adminView = document.getElementById('admin-view');
            const viewSwitchBtn = document.getElementById('view-switch-btn');
            const adminLoginBtn = document.getElementById('admin-login-btn');
            const logoutBtn = document.getElementById('logout-btn');
            const loginModal = document.getElementById('login-modal');
            const closeModal = document.querySelector('.close-modal');
            const loginForm = document.getElementById('login-form');
            
            let currentView = 'public';
            
            viewSwitchBtn.addEventListener('click', function() {
                if (currentView === 'public') {
                    publicView.style.display = 'none';
                    adminView.style.display = 'block';
                    currentView = 'admin';
                    viewSwitchBtn.innerHTML = '<i class="fas fa-exchange-alt"></i> Public View';
                } else {
                    publicView.style.display = 'block';
                    adminView.style.display = 'none';
                    currentView = 'public';
                    viewSwitchBtn.innerHTML = '<i class="fas fa-exchange-alt"></i> Admin View';
                }
            });
            
            adminLoginBtn.addEventListener('click', function(e) {
                e.preventDefault();
                loginModal.style.display = 'flex';
            });
            
            closeModal.addEventListener('click', function() {
                loginModal.style.display = 'none';
            });
            
            window.addEventListener('click', function(e) {
                if (e.target === loginModal) {
                    loginModal.style.display = 'none';
                }
            });
            
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                
                if (username === 'admin' && password === 'admin123') {
                    publicView.style.display = 'none';
                    adminView.style.display = 'block';
                    currentView = 'admin';
                    viewSwitchBtn.innerHTML = '<i class="fas fa-exchange-alt"></i> Public View';
                    loginModal.style.display = 'none';
                } else {
                    alert('Invalid credentials. Try admin/admin123');
                }
            });
            
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                publicView.style.display = 'block';
                adminView.style.display = 'none';
                currentView = 'public';
                viewSwitchBtn.innerHTML = '<i class="fas fa-exchange-alt"></i> Admin View';
            });
            
            document.getElementById('report-btn').addEventListener('click', function(e) {
                e.preventDefault();
                document.getElementById('report-form').scrollIntoView({ behavior: 'smooth' });
            });
            
            document.getElementById('report-form').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your report. Our team will review it shortly.');
                this.reset();
            });
            
            if (window.innerWidth <= 768) {
                document.querySelector('.sidebar').classList.add('active');
            }
        });
