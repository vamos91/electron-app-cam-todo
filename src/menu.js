const { app, Menu, BrowserWindow } = require('electron')

const menuItems = [
    {
        label: 'Menu',
        submenu: [
            {
                label: 'about'
            }
        ]

    },
    {
        label: 'File',
        submenu: [
            {
                label: 'Exit',
                click: () => {
                    app.quit()
                }
            },
            {
                type: 'separator'
            },
            {
                label: 'Learn more'
            }
        ]

    },
    {
        label: 'windows',
        submenu: [
            {
            label: 'close window',
            role: 'close'
        },
        {
            role: 'toggleDevTools'
        }
    ]
        
    },
    {
        label: 'View',
        submenu: [
            {
                role: 'reload'
            },
            {
                label: 'Open camera',
                click: () => {
                    const win = new BrowserWindow({
                        width: 640,
                        height: 480,
                        show: false
                    })
                    win.loadFile('src/camera.html')
                    win.once('ready-to-show', () => {
                        win.show()
                    })
                }
            }
        ]

    },
]

const menu = Menu.buildFromTemplate(menuItems)
Menu.setApplicationMenu(menu)

module.export = Menu