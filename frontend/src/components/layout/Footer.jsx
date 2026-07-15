function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">

      <div className="container text-center">

        <h5>CA Business Platform</h5>

        <p>
          Professional Chartered Accountant Services
        </p>

        <small>
          © {new Date().getFullYear()} All Rights Reserved.
        </small>

      </div>

    </footer>
  );
}

export default Footer;