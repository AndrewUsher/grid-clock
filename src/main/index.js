import { format as formatUrl } from 'url'
import { app, BrowserWindow } from 'electron'
import { join } from 'path'

const isDevelopment = process.env.NODE_ENV !== 'production'

let window

function createWindow () {
  window = new BrowserWindow({
    fullscreen: true
  })
  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
  } else {
    window.loadURL(
      formatUrl({
        pathname: join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
      })
    )
  }

  window.on('closed', () => {
    window = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (window === null) {
    createWindow()
  }
})
