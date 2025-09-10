// script.js

const html = document.querySelector('html')

document.querySelector('#themeJusblazm').addEventListener('click', () => {
    html.classList.add('theme-jusblazm')
    html.classList.remove('theme-red')
    html.classList.remove('theme-lime')
    html.classList.remove('theme-cyan')
})

document.querySelector('#themeRed').addEventListener('click', () => {
    html.classList.add('theme-red')
    html.classList.remove('theme-lime')
    html.classList.remove('theme-cyan')
    html.classList.remove('theme-jusblazm')
})

document.querySelector('#themeLime').addEventListener('click', () => {
    html.classList.add('theme-lime')
    html.classList.remove('theme-red')
    html.classList.remove('theme-cyan')
    html.classList.remove('theme-jusblazm')
})

document.querySelector('#themeCyan').addEventListener('click', () => {
    html.classList.add('theme-cyan')
    html.classList.remove('theme-red')
    html.classList.remove('theme-lime')
    html.classList.remove('theme-jusblazm')
})

const accessibilityPanel = document.querySelector('#accessibilityPanel')
const accessibilityOverlay = document.querySelector('#accessibilityOverlay')
const body = document.querySelector('body')

document.querySelector('#accessibility').addEventListener('click', () => {
    accessibilityPanel.classList.toggle('hidden')
    accessibilityOverlay.classList.toggle('hidden')
    body.classList.toggle('overflow-hidden')
})

document.querySelector('#accessibilityOverlay').addEventListener('click', () => {
    accessibilityPanel.classList.add('hidden')
    accessibilityOverlay.classList.add('hidden')
    body.classList.remove('overflow-hidden')
})

if (html.classList.contains('font-open-dyslexic')) {
    const code = document.querySelectorAll('code')
    code.forEach(e => {   
        e.classList.add('font-open-dyslexic')
    })
}

if (html.classList.contains('font-open-dyslexic-italic')) {
    const code = document.querySelectorAll('code')
    code.forEach(e => {
        e.classList.add('font-open-dyslexic-italic')
    })
}

if (html.classList.contains('font-open-dyslexic-bold')) {
    const code = document.querySelectorAll('code')
    code.forEach(e => {
        e.classList.add('font-open-dyslexic-bold')
    })
}

if (html.classList.contains('font-open-dyslexic-bold-italic')) {
    const code = document.querySelectorAll('code')
    code.forEach(e => {
        e.classList.add('font-open-dyslexic-bold-italic')
    })
}
