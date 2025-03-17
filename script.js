function copyLink(chapterId) {
    const link = window.location.href.split('?')[0] + '?chapter=' + chapterId;
    navigator.clipboard.writeText(link).then(() => {
        alert('Ссылка скопирована: ' + link);
    }).catch(err => {
        console.error('Ошибка при копировании ссылки: ', err);
    });
}


function checkChapterFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    // С помощью eval получаем html элемент с указанным id
    const chapter = eval(urlParams.get('chapter')); 

    if (chapter) {
        chapter.scrollIntoView({ behavior: 'smooth' });
    }
}


window.onload = checkChapterFromUrl;