import { Button, notification } from "antd"

export default function AddToCart({ product, qty }) {
  const openNotification = () => {
    notification.open({
      message: 'Shop Notification',
      description:
        `${qty} ${qty>1?"pieces":"piece"} of ${product.name} ${qty>1?"have":"has"} been added to your cart.`,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  }; 

  return (
    <Button type="primary" className="btn-tocar" onClick={openNotification}>
      Add To Cart
    </Button>
  );
}
