import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useMemo } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import SnackBarModal from './components/ui/SnackBar'
import { darkTheme, lightTheme } from './lib/constants/theme'
import AppRoutes from './routes/Routes'
import { store } from './store/store'
import { uiSLiceActions } from './store/ui/ui.slice'

function AppContent() {
  const dispatch = useDispatch()

  const snackbar = useSelector((state) => state.ui.snackbar)
  const themeMode = useSelector((state) => state.ui.themeMode)

  const theme = useMemo(() => {
    const currentTheme =
      themeMode === 'light'
        ? {
            ...lightTheme,
          }
        : { ...darkTheme }

    return createTheme(currentTheme)
  }, [themeMode])

  return (
    <ThemeProvider theme={theme}>
      <SnackBarModal
        isOpen={snackbar.isOpen}
        severity={snackbar.severity}
        message={snackbar.message}
        onClose={() => dispatch(uiSLiceActions.closeSnackBar())}
      />
      <AppRoutes />
    </ThemeProvider>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </BrowserRouter>
  )
}

export default App

// GET /foods
// Headers: { UserID: "your_name"  }
// GET /basket
// Headers: { UserID: "your_name"  }
// POST /foods/:foodId/addToBasket
// BODY: { amount: number }
// Headers: { UserID: "your_name"  }
// DELETE /basketItem/:id/delete
// Headers: { UserID: "your_name"  }
// PUT /basketItem/:id/update
// BODY: { amount: number }
// Headers: { UserID: "your_name"  }
