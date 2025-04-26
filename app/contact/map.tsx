export default function Map() {
  return (
    <div className="w-full h-[300px] rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.77404540214472!2d54.376799581902566!3d24.45599739891755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67a5a161e2d1%3A0x60b34a525f7435a0!2sAbu%20Dhabi%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1699532617485!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
