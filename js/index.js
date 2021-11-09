$(document).ready(function() {
    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7 (       )         -' });
    $(".custom-select").niceSelect()

    $(".password-toggle").click(function() {
        if ($(this).hasClass("password-toggle--active")) {
            $(this).siblings("input").attr("type", "password")
            $(this).removeClass("password-toggle--active")
        } else {
            $(this).siblings("input").attr("type", "text")
            $(this).addClass("password-toggle--active")
        }
    })

    $(".content__form-next[type='submit']").click(function(event) {
        event.preventDefault();
        let password1 = $("#password1").val()
        let password2 = $("#password2").val()

        if (!password1 || !password2) {
            $(".content__form-error").show()

        } else {
            if (password1 !== password2) {
                $(".content__form-error").hide()
                $(".content__form-password-error").show()
            } else {
                $(".content__form").hide()
                $(".content__form-thanks").show()
                console.log('form submitted')
            }
        }


    })


    $(".content__form-next[type='button']").click(function() {
        path = $(".content__form-step--active").attr("data-step-path")
        if (path == 1) {
            let phoneVal = $(".content__form-step #phone").val()
            let optionPlaceholder = $(".content__form-step #select option:hidden").val()
            let option = $(".content__form-step #select option:selected").val()
            let confirm = $("#confirm").is(':checked')
            console.log(confirm)
            if (option != optionPlaceholder && phoneVal && confirm) {
                console.log(option, optionPlaceholder)
                $(".content__form-error").hide()
                $(".content__form-step").removeClass("content__form-step--active")
                $(`.content__form-step[data-step-path="2"]`).addClass("content__form-step--active")
                $(".content__form-pag-item").removeClass("content__form-pag-item--active")
                $(".content__form-pag-item[data-pag-path='2']").addClass("content__form-pag-item--active")
                $(".content__form-next[type='button']").hide()
                $(".content__form-next[type='submit']").show()
            } else {
                $(".content__form-error").show()
            }

        }
    })

    // $(".content__form-next")

    $(".content__form-prev").click(function() {
        $(".content__form-pag-item").removeClass("content__form-pag-item--active")
        $(".content__form-pag-item[data-pag-path='1']").addClass("content__form-pag-item--active")
        $(".content__form-step").removeClass("content__form-step--active")
        $(`.content__form-step[data-step-path="1"]`).addClass("content__form-step--active")
        $(".content__form-next[type='submit']").hide()
        $(".content__form-next[type='button']").show()
    })
})