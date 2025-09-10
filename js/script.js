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



// const icon = document.createElement('img')
// icon.setAttribute('src', 'img/accessibility_icon.png')
// icon.setAttribute('alt', 'Accessibility options')
// icon.setAttribute('type', 'button')
// icon.setAttribute('data-drawer-target', 'accessibility-drawer')
// icon.setAttribute('data-drawer-show', 'accessibility-drawer')
// icon.setAttribute('aria-controls', 'accessibility-drawer')
// icon.setAttribute('width', '50px')
// icon.classList.add('absolute', 'top-48', 'left-0')

// const panel = document.createElement('div')
// panel.setAttribute('id', 'accessibility-drawer')
// panel.setAttribute('tabindex', '-1')
// panel.setAttribute('aria-labelledby', 'drawer-label')
// panel.classList.add('fixed', 'top-0', 'left-0', 'z-40', 'h-screen', 'p-4', 'overflow-y-auto', 'transition-transform', '-translate-x-full', 'w-80')

// const panelTitle = document.createElement('div')
// panelTitle.setAttribute('id', 'drawer-label')
// panelTitle.classList.add('inline-flex', 'items-center', 'mb-4', 'font-semibold')
// panelTitle.innerHTML = "Simple Accessibility"

// const closeBtn = document.createElement('button')
// closeBtn.setAttribute('type', 'button')
// closeBtn.setAttribute('data-drawer-hide', 'accessibility-drawer')
// closeBtn.setAttribute('aria-controls', 'accessibility-drawer')
// closeBtn.classList.add('rounded-lg', 'text-sm', 'w-8', 'h-8', 'absolute', 'top-2.5', 'end-2.5', 'flex', 'items-center', 'justify-center', )

// const closeSvg = document.createElement('svg')
// closeSvg.setAttribute('aria-hidden', 'true')
// closeSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
// closeSvg.setAttribute('fill', 'none')
// closeSvg.setAttribute('viewBox', '0 0 14 14')
// closeSvg.classList.add('w-3', 'h-3')

// const closePath = document.createElement('path')
// closePath.setAttribute('stroke', 'currentColor')
// closePath.setAttribute('stroke-linecap', 'round')
// closePath.setAttribute('stroke-width', '2')
// closePath.setAttribute('d', 'm1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6')

// const closeSpan = document.createElement('span')
// closeSpan.classList.add('sr-only')
// closeSpan.innerText = 'Close menu'

// closeSvg.append(closePath)
// closeBtn.append(closeSvg, closeSpan)
// panel.append(panelTitle, closeBtn)

// const body = document.querySelector('body')

// body.append(icon)