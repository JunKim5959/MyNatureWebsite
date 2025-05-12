<?php
session_start();
$productID = $_GET['productID'];
$_SESSION['cart'][] = $productID;
header("Location: shopping_cart.php");
exit;
?>