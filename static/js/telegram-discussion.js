const script = document.createElement('script')
script.async = true
script.src = 'https://telegram.org/js/telegram-widget.js?22'
script.dataset.telegramDiscussion = 'ITDOXY'
script.dataset.commentsLimit = '5'
script.dataset.colorful = '1'
script.dataset.color = '343638'
script.dataset.darkColor = 'FFFFFF'

if (document.querySelector('html').dataset.theme === 'dark') {
    script.dataset.dark = '1'
}

const comments = document.getElementsByClassName('telegram-comments')[0]
comments.appendChild(script)