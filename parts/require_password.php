<?php
    global $post;
    $label = 'pwbox-'.( empty( $post->ID ) ? rand() : $post->ID );
    $action_url = esc_url( site_url( 'wp-login.php?action=postpass', 'login_post' ) );
?>

<div class='only-content-flex section-dark'>
    <span class="separator"></span>
    <form class="only-content-content gap-4" action="<?php echo $action_url; ?>" method="post">
        <h4 class="text-2xl">    Password richiesta</h4>
        <input class="bg-body-bg text-body-tx text-center text-xl" name="post_password" id="<?php echo $label; ?>" type="password" size="20" autocomplete="post_password" />
        <input class="abutton" type="submit" name="Submit" value="Accedi">
    </form>
    </span>
    <span class="separator"></span>
</div>