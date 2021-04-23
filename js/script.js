const selectSingle = document.querySelector('.select');
const selectSingle_title = selectSingle.querySelector('.select_title');
const selectSingle_labels = selectSingle.querySelectorAll('.select_label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

$(function(){
  $("a[href^='#book_form']").click(function(){
  var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
});

var modal = document.getElementById('iw-modal');
var text_fname1 = document.getElementById('fname');
var text_phone1 = document.getElementById('phone');
var text_fname2 = document.getElementById('fname2');
var text_phone2 = document.getElementById('phone2');
var srv = selectSingle.value;


$('.mask-phone').mask('9 (999) 999-99-99');

$(function(){
  $(".saveCourse").click(function() {
    if(text_fname1.value=="")
      {
        text_fname1.classList.add('error')
      }
      else
      {
        var myname = text_fname1.value;
        var re = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/;
        var valid = re.test(myname);
        if (valid) 
          {
            text_fname1.classList.remove('error')
          }
          else 
          {
            text_fname1.classList.add('error')
          }
      }
    if(text_phone1.value=="")
      {
        text_phone1.classList.add('error')
      }
      else
      {
        text_phone1.classList.remove('error')
      }
    if(text_fname1.value != "" && text_phone1.value != "")
      {
        modal.style.display = "block";
        modal.style["pointer-events"] = "auto";
        text_fname1.value='';
        text_phone1.value='';
      }
  });
});

$(function(){
  $(".saveCourse2").click(function() {
    if(text_fname2.value == "")
      {
        text_fname2.classList.add('error')
      }
      else
      {
        var myname = text_fname2.value;
        var re = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/;
        var valid = re.test(myname);
        if (valid) 
          {
            text_fname2.classList.remove('error')
          }
          else 
          {
            text_fname2.classList.add('error')
          }
      }
    if(text_phone2.value == "")
      {
        text_phone2.classList.add('error')
      }
      else
      {
        text_phone2.classList.remove('error')
      }
    if(selectSingle_title.textContent == selectSingle_title.getAttribute('data-default'))
      {
        selectSingle_title.classList.add('error')
      }
      else
      {
        selectSingle_title.classList.remove('error')
      }
    if(text_fname2.value != "" && text_phone2.value != "" && selectSingle_title.textContent != selectSingle_title.getAttribute('data-default'))
      {
        modal.style.display = "block";
        modal.style["pointer-events"] = "auto";
        selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
        text_fname2.value='';
        text_phone2.value='';
      }
  });
});

$(function(){
    $(".closeCourse").click(function() {
      modal.style.display = "none";
      modal.style["pointer-events"] = "none";
    });
});