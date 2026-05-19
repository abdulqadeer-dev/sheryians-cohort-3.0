function addBlogs() {
    const blogsContent = [
        {
            image: "https://images.unsplash.com/photo-1609752992719-06b160eef9c6?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Tech",
            title: "The Ultimate Guide To SaaS Marketing",
            date: "May 23, 2025",
            alt: "The Ultimate Guide To SaaS Marketing"
        },
        {
            image: "https://images.unsplash.com/photo-1619064852760-b919a6cee318?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "SaaS",
            title: "The Ultimate Guide To SaaS Marketing",
            date: "May 23, 2025",
            alt: "The Ultimate Guide To SaaS Marketing"
        },
        {
            image: "https://images.unsplash.com/photo-1644035657299-9376025604aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Marketing",
            title: "The Ultimate Guide To SaaS Marketing",
            date: "May 23, 2025",
            alt: "The Ultimate Guide To SaaS Marketing"
        }
    ];

    const blogs = document.querySelector('.blogs-cards-wraper');

    blogsContent.forEach(cardContent => {
        blogs.innerHTML += `
    <div class="blog-card" data-category="${cardContent.category}">
    <img src="${cardContent.image}" alt="${cardContent.alt}">

    <div class="content">
        <span class="blog-category">${cardContent.category}</span>
        <h2>${cardContent.title}</h2>
        <span class="publish-date">${cardContent.date}</span>
    </div>
</div>
`;
    })
}

function filterBlogs() {
    const filters = document.querySelectorAll('#filter-wraper span');

    filters.forEach(filter => {

        filter.addEventListener('click', () => {
            filters.forEach(item => {
                item.classList.remove('filter-active');
                item.classList.add('filter');
            });


            filter.classList.add('filter-active');
            filter.classList.remove('filter');

            const filterValue = filter.textContent;

            const cards = document.querySelectorAll('.blog-card');

            cards.forEach(card => {

                if (
                    filterValue === 'All' ||
                    card.dataset.category === filterValue
                ) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }

            });

        });

    });
}

addBlogs();
filterBlogs();
