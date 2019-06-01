$(document).ready(function() {
    $('.header-wrap').fadeOut(500);
    $('.offer').delay(500).fadeIn(1000);
    $('.main').delay(500).fadeIn(1000);
    $('.offer__btn').addClass('fadeInUp');
    $('.header').animate({
        'background-position-y': '0'
    }, 700, 'linear');
    $('#pagepiling').pagepiling({
        tooltip: false,
        anchors: ['main', 'how', 'gallery', 'sales'],
        normalScrollElements: '.unvis-img, .gallery__offer, .btn, .noscrl',
        scrollingSpeed: 350,
        afterLoad: function(anchorLink, index){
            //using anchorLink
            if(anchorLink == 'main'){
                $('.menu__link_main').addClass('active');
                $('.header-wrap').fadeOut(1000);
                $('.offer').delay(1000).fadeIn(1500);
                $('.main').delay(1000).fadeIn(1500);
                $('.offer__btn').addClass('fadeInUp');
                $('.header').animate({
                    'background-position-y': '0'
                }, 1000, 'linear');
                $('.unvis-img').addClass('d-none');
            }
            else{
                $('.menu__link_main').removeClass('active');
                $('.header-wrap').fadeIn(1);
                $('.offer').fadeOut(1);
                $('.main').fadeOut(1);
                $('.offer__btn').removeClass('fadeInUp');
                $('.header').animate({
                    'background-position-y': '30vh'
                }, 1000, 'linear');
            }
            if(anchorLink == 'how'){
                $('.menu__link_how').addClass('active');
                $('.how-wrapper').fadeOut(500);
                $('.how__item').delay(700).addClass('fadeInUp');
                $('.how__btn').addClass('fadeIn');
                $('.unvis-img').addClass('d-none');
            }
            else{
                $('.menu__link_how').removeClass('active');
                $('.how-wrapper').fadeIn(1);
                $('.how__item').removeClass('fadeInUp');
                $('.how__btn').removeClass('fadeIn')
            }
            if(anchorLink == 'gallery'){
                $('.menu__link_gallery').addClass('active');
                $('.img-wrap').removeClass('fadeOutUp').addClass('fadeInUp').removeClass('no-delay');
                $('.vis-img').removeClass('fadeOutUp').removeClass('animated').removeClass('d-none');
                $('.open-img').addClass('d-none');
                $('.close-img').removeClass('d-none');
                $('.unvis-img').addClass('d-none').removeClass('fadeInUp');
            }
            else{
                $('.menu__link_gallery').removeClass('active');
                $('.img-wrap').removeClass('fadeOutUp').removeClass('fadeInUp');
            }
            if(anchorLink == 'sales'){
                $('.menu__link_sales').addClass('active');
                $('.sales__offer').addClass('fadeInUp');

            }
            else{
                $('.menu__link_sales').removeClass('active')
            }
        },
        onLeave: function(index, nextIndex, direction){
            if(index == 3 && direction =='down'){
                $('.img-wrap').addClass('fadeOutUp').removeClass('fadeInUp').addClass('no-delay');
            }

            else if(index == 2 && direction == 'up'){
                $('.img-wrap').addClass('fadeOutUp').removeClass('fadeInUp').addClass('no-delay');
            }
        }
    });
    $.fn.pagepiling.setAllowScrolling(true);
    $('.play__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.play').fadeIn(400);
    });
    $('.jazz__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.jazz').fadeIn(400);
    });
    $('.dyhanie__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.dyhanie').fadeIn(400);
    });
    $('.tribeca__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.tribeca').fadeIn(400);
    });
    $('.loftec__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.loftec').fadeIn(400);
    });
    $('.kleinhouse__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.kleinhouse').fadeIn(400);
    });
    $('.art__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.art').fadeIn(400);
    });
    $('.bolshevick__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.bolshevick').fadeIn(400);
    });
    $('.lucky__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.lucky').fadeIn(400);
    });
    $('.ares__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.ares').fadeIn(400);
    });
    $('.redside__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.redside').fadeIn(400);
    });
    $('.neva__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.neva').fadeIn(400);
    });
    $('.mednyi__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.mednyi').fadeIn(400);
    });
    $('.im__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.im').fadeIn(400);
    });
    $('.capital__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.capital').fadeIn(400);
    });
    $('.balchug__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.balchug').fadeIn(400);
    });
    $('.nv__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.nv').fadeIn(400);
    });
    $('.ordynka__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.ordynka').fadeIn(400);
    });
    $('.depre__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.depre').fadeIn(400);
    });
    $('.bal-view__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.bal-view').fadeIn(400);
    });
    $('.mone__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.mone').fadeIn(400);
    });
    $('.renome__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.renome').fadeIn(400);
    });
    $('.oko__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.oko').fadeIn(400);
    });
    $('.book__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.book').fadeIn(400);
    });
    $('.sad__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.sad').fadeIn(400);
    });
    $('.malaya__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.malaya').fadeIn(400);
    });
    $('.white__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.white').fadeIn(400);
    });
    $('.roza__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.roza').fadeIn(400);
    });
    $('.ricco__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.ricco').fadeIn(400);
    });
    $('.cher__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.cher').fadeIn(400);
    });
    $('.bark__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.bark').fadeIn(400);
    });
    $('.dmitrov__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.dmitrov').fadeIn(400);
    });
    $('.moss__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.moss').fadeIn(400);
    });
    $('.kuznec__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.kuznec').fadeIn(400);
    });
    $('.bunin__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.bunin').fadeIn(400);
    });
    $('.nabokov__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.nabokov').fadeIn(400);
    });
    $('.chekhov__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.chekhov').fadeIn(400);
    });
    $('.cloud__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.cloud').fadeIn(400);
    });
    $('.park__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.park').fadeIn(400);
    });
    $('.sovremen__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.sovremen').fadeIn(400);
    });
    $('.bulg__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.bulg').fadeIn(400);
    });
    $('.fair__btn').click(function (e) {
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            }
        });
        $('.fair').fadeIn(400);
    });
    $('.sales__btn').click(function (e) {
        window.oldpup = '/thanks.html?referrer=prevpup';
        $('#exampleModal').arcticmodal({
            afterClose: function(data, el) {
                $('.form-img').fadeOut(400)
            },
        });
        $('.sales-modal').fadeIn(400);
    });


    //gallery button
    $('.gallery__btn').click(function () {
        $('.unvis-img').toggleClass('d-none').toggleClass('fadeInUp');
        $('.vis-img').toggleClass('fadeOutUp').toggleClass('animated').delay(1000).toggleClass('d-none');
        $('.open-img').toggleClass('d-none');
        $('.close-img').toggleClass('d-none');
    });
    $('.all-overlay-link').click(function () {
        $('.unvis-img').removeClass('d-none').addClass('fadeInUp');
        $('.vis-img').addClass('fadeOutUp').addClass('animated').delay(1000).addClass('d-none');
        $('.open-img').toggleClass('d-none');
        $('.close-img').toggleClass('d-none');
    });

    $('.burger').click(function () {
        $('.main-mob').fadeIn(500)
        $('.backgr').fadeIn(700)
    });
    $('.closer').click(function () {
        $('.main-mob').fadeOut(500);
        $('.backgr').fadeOut(700)
    });
    $('.menu__link').click(function () {
        $('.main-mob').fadeOut(500);
        $('.backgr').fadeOut(700)
    });

//    FORM

    $(function() {
        $('.modal__btn').click(function() {
            var parent = $(this).attr('data-parent');
            var form = $(this).attr('data-target')
            $(form).find('input[name=target]').val(parent);
        })
    });

//Валидация и отправка формы

    $(document).ready(function() {
        $('[data-submit]').on('click', function(e) {
            e.preventDefault();
            $(this).parent('form').submit();
        })
        $.validator.addMethod(
            "regex",
            function(value, element, regexp) {
                var re = new RegExp(regexp);
                return this.optional(element) || re.test(value);
            },
            "Please check your input."
        );
        // Функция валидации и вывода сообщений
        function valEl(el) {

            el.validate({
                rules: {
                    tel: {
                        required: true,
                        regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                    },
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    tel: {
                        required: '',
                        regex: ''
                    },
                    name: {
                        required: ''
                    },
                    email: {
                        required: '',
                        email: ''
                    },
                    viber: {
                        required: '',
                        email: ''
                    },
                    telegram: {
                        required: '',
                        email: ''
                    },
                    vk: {
                        required: '',
                        email: ''
                    },
                    whatsApp: {
                        required: '',
                        email: ''
                    }
                },
                submitHandler: function(form) {
                    $('#loader').fadeIn();
                    var $form = $(form);
                    var $formId = $(form).attr('id');
                    switch ($formId) {
                        // Если у формы id="popupResult" - делаем:
                      case 'form1':
                            $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                                .always(function(response) {
                                    setTimeout(function() {
                                      link = window.oldpup ? oldpup : '/thanks.html?referrer=default';
                                      window.oldpup = undefined;
                                      $form.trigger('reset');
                                      location.assign(link);
                                    },1000);
                                });
                                break;
                        case 'form2':
                            $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                              .always(function(response) {
                                setTimeout(function() {
                                  link = window.oldpup ? oldpup : '/thanks.html?referrer=default';
                                  window.oldpup = undefined;
                                  $form.trigger('reset');
                                  location.assign(link);
                                },1000);
                              });
                            break;
                        case 'form3':
                            $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                              .always(function(response) {
                                setTimeout(function() {
                                  link = window.oldpup ? oldpup : '/thanks.html?referrer=default';
                                  window.oldpup = undefined;
                                  $form.trigger('reset');
                                  location.assign(link);
                                },1000);
                              });
                            break;
                        case 'form4':
                            $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                              .always(function(response) {
                                setTimeout(function() {
                                  link = window.oldpup ? oldpup : '/thanks.html?referrer=default';
                                  window.oldpup = undefined;
                                  $form.trigger('reset');
                                  location.assign(link);
                                },1000);
                              });
                            break;
                        case 'form5':
                            $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                              .always(function(response) {
                                setTimeout(function() {
                                  link = window.oldpup ? oldpup : '/thanks.html?referrer=default';
                                  window.oldpup = undefined;
                                  $form.trigger('reset');
                                  location.assign(link);
                                },1000);
                              });
                            break;
                        case 'form6':
                            $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                              .always(function(response) {
                                setTimeout(function() {
                                  link = window.oldpup ? oldpup : '/thanks.html?referrer=default';
                                  window.oldpup = undefined;
                                  $form.trigger('reset');
                                  location.assign(link);
                                },1000);
                              });
                            break;
                    }
                    return false;
                }
            })
        }

        // Запускаем механизм валидации форм, если у них есть класс .js-form
        $('.js-form').each(function() {
            valEl($(this));
        });

    });
    $(function() {
        $("img.lazy").show().lazyload({
            effect : "fadeIn",
            skip_invisible: false,
            threshold : 200
        });
    });

});