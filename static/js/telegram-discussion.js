const commentsContainer = document.getElementsByClassName('telegram-comments')[0]

const TG_CONFIG = {
    channel: 'ITDOXY',
    commentsLimit: 5,
    colorful: 1,
    color: '343638',
    darkColor: 'FFFFFF',
}

function initTelegramWidget() {
    const isDark = document.querySelector('html').dataset.theme === 'dark'

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://telegram.org/js/telegram-widget.js?22'
    script.dataset.telegramDiscussion = TG_CONFIG.channel
    script.dataset.commentsLimit = String(TG_CONFIG.commentsLimit)
    script.dataset.colorful = String(TG_CONFIG.colorful)
    script.dataset.color = TG_CONFIG.color
    script.dataset.darkColor = TG_CONFIG.darkColor
    if (isDark) {
        script.dataset.dark = '1'
    }
    commentsContainer.appendChild(script)
}

initTelegramWidget()

function updateTelegramIframe(dark) {
    const iframe = commentsContainer.querySelector('iframe')
    if (iframe) {
        let src = iframe.src
            .replace(/&dark=[^&]*/, '')
        if (dark) {
            src += `&dark=1`
        }
        iframe.src = src
    }
}

window.addEventListener('theme-changed', (e) => {
    updateTelegramIframe(e.detail.theme === 'dark')
})