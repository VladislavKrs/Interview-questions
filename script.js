const listCard = document.getElementById('list-question')

listQuestion.forEach((el, index) => {
    const indexList = (index + 1)
    const listState = (el.state === true);
    const stateSpan = listState ? 'has-text-success-dark' : 'has-text-danger-dark';
    const stateText = listState ? 'Разобрался с вопросом' : 'Не разобрался с вопросом';
    listCard.insertAdjacentHTML('beforeend', `
    <div class="card has-background-grey-lighter mb-4 p-3 ">
     ${indexList}. ${el.question}
    <span class="icon-text ${stateSpan}">
        <span class="icon">
            <i class="fa-solid fa-check mt-1 mx-2"></i>
        </span>
        <span>${stateText}</span>
    </span>
    <div class="buttons mt-2">
        <button class="button is-primary">Изменить статус</button>
    </div>
  </div>`)
})

