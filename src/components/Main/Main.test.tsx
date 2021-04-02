import { render, screen } from '@testing-library/react'
import Main from '.'

describe('loads items eventually', () => {
  it('loads items eventually', async () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
