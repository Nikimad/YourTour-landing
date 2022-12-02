const changeActive = (e, collection) => {
    e.preventDefault();

    const currentActive = [...collection].find((item) => item.classList.contains('link_active'));

    if (currentActive === e.target) return;

    currentActive.classList.replace('link_active', 'link_black');
    e.target.classList.replace('link_black', 'link_active');
}

export default changeActive;