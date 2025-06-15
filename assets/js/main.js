const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(`#${tab.dataset.target}`);

        // Evita repetir se já estiver ativo
        if (!target.classList.contains('skills_active')) {
            tabContent.forEach(tc => tc.classList.remove("skills_active"));
            tabs.forEach(t => t.classList.remove("skills_active"));

            target.classList.add('skills_active');
            tab.classList.add('skills_active');
        }
    });
});




document.addEventListener('DOMContentLoaded', function () {
    var mixer = mixitup('.work_container');
});



const linkWork = document.querySelectorAll('.work_item')

function activeWork (){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))
