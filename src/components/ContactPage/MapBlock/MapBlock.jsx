import styles from "./MapBlock.module.css";

const MapBlock = () => {
  return (
    <div className={styles["map-block"]}>
      <iframe
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.8633430071054!2d17.031862215517204!3d51.11098147957194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc30e96402f6b%3A0xfd2c490b568df05e!2sBiznesExpert!5e0!3m2!1sen!2sus!4v1678739375130!5m2!1sen!2sus"
        width="1400"
        height="530"
        allowFullScreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapBlock;
