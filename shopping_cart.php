<?php
session_start();
include "connect.php";
echo "<h2>Your Cart</h2>";
$cart = $_SESSION['cart'] ?? [];

if (empty($cart)) {
    echo "Cart is empty.";
} else {
    foreach ($cart as $productID) {
        $result = mysqli_query($conn, "SELECT * FROM Products WHERE product_id = $productID");
        $row = mysqli_fetch_assoc($result);
        echo $row['product_name'] . " - $" . $row['product_price'] . "<br>";
    }
    echo "<a href='checkout.php'>Proceed to checkout</a>";
}
?>