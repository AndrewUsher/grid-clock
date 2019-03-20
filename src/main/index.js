const { app, BrowserWindow } = require('electron')
const { join } = require('path')

const IS_DEV = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let window

function createWindow () {
  window = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      nodeIntegration: false
    }
  })
  window.loadURL(
    IS_DEV ? 'http://localhost:1234' : join(__dirname, 'index.html')
  )
  window.webContents.openDevTools()

  window.on('closed', () => {
    window = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (window === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
