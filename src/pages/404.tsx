import ErrorPage from './errorPage'

export default function NotFoundPage() {
  return (
    <ErrorPage
      code={404}
      title="Page Not Found"
      message1="Sorry, the page you're looking for doesn't exist."
      message2="Please check the URL or return to the homepage."
    />
  )
}