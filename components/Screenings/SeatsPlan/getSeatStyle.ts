export const getSeatStyle = (status: 'free' | 'reserved' | 'taken') => {
  if (status === 'free') {
    return {
      backgroundColor: 'green.500',
      color: 'white',
      _hover: {
        backgroundColor: 'green.700',
      },
    }
  }

  if (status === 'reserved') {
    return {
      backgroundColor: 'yellow.500',
      color: 'white',
      _disabled: {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
      _hover: {
        backgroundColor: 'yellow.600',
      },
    }
  }

  if (status === 'taken') {
    return {
      backgroundColor: 'red.500',
      color: 'white',
      _disabled: {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
      _hover: {
        backgroundColor: 'red.600',
      },
    }
  }
}
