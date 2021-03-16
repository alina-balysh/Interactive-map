let previous_region = '';
let current_region = '';

const VITEBSK_REGION = 'vitsebskaia-voblasts';
const GRODNO_REGION = 'hrodnenskaia-voblasts';
const MINSK_REGION = 'minskaia-voblasts';
const MOGILEV_REGION = 'mahiliouskaia-voblasts';
const BREST_REGION = 'brestskaia-voblasts';
const GOMEL_REGION = 'homelskaia-voblasts';

const CURRENT_COLOR = '#898989';
const HOVER_COLOR = '#D9DADA';
const COLOR = '#BCBBC0';

$(window).load(() => {
  $('.minsk').css('display', 'block');
  changeCurrentReg(MINSK_REGION);
})

$('#regions polygon').on('mouseenter', (e) => {
  $(e.target).css('fill', HOVER_COLOR);
})

$('#regions polygon').on('mouseleave', (e) => {
  if (e.target.id === current_region)
    $(e.target).css('fill', CURRENT_COLOR);
  else $(e.target).css('fill', COLOR);
})

$('#regions polygon').on('click', (e) => {
  changeCurrentReg(e.target.id);
})

function changeCurrentReg(newCurrentReg) {
  if (previous_region == '') {
    current_region = newCurrentReg;
    $(`.${current_region}`).css('display', 'block');
    $(`#${current_region}`).css('fill', CURRENT_COLOR);
  }
  previous_region = current_region;
  current_region = newCurrentReg;

  $(`.${previous_region}`).css('display', 'none');
  $(`.${current_region}`).css('display', 'block');

  $(`#${previous_region}`).css('fill', COLOR);
  $(`#${current_region}`).css('fill', CURRENT_COLOR);
}

$("input:checkbox").on("change", (e) => {
  if (e.target.checked) { //когда ставим
    $(`#${e.target.id}-svg`).css('display', 'block');
  } else { //когда убираем
    $(`#${e.target.id}-svg`).css('display', 'none');
  }
});