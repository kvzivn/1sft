function propertyType(evt, type) {
    const content = document.querySelectorAll('.Filter-content');
    const tablinks = document.querySelectorAll('.Filter-item');

    content.forEach(el => el.style.display = 'none')
    document.getElementById(type).style.display = 'block';
    tablinks.forEach(el => el.classList.remove('Filter-item--active'))
    evt.currentTarget.classList.add('Filter-item--active');
}