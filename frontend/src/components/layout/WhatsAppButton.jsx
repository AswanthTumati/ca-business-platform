function WhatsAppButton() {
  const phone =
    import.meta.env.VITE_WHATSAPP_NUMBER;

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      className="btn btn-success rounded-circle position-fixed"
      style={{
        bottom: "25px",
        right: "25px",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        zIndex: 999,
      }}
    >
      💬
    </a>
  );
}

export default WhatsAppButton;