    document.addEventListener('DOMContentLoaded', () => {

        const dropdownBtns = document.querySelectorAll('.dropdown-btn');



        dropdownBtns.forEach(btn => {

            btn.addEventListener('click', (e) => {

                e.stopPropagation();

                const currentDropdown = btn.nextElementSibling;

            

                document.querySelectorAll('.dropdown-content').forEach(content => {

                    if (content !== currentDropdown) {

                        content.classList.remove('show');

                    }

                });



                currentDropdown.classList.toggle('show');

            });

        });



        document.addEventListener('click', () => {

            document.querySelectorAll('.dropdown-content').forEach(content => {

                content.classList.remove('show');

            });

        });

    });
