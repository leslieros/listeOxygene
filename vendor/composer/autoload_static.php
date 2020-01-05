<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitac62bc8f89d6a3b2ea59cfb30e5ee3e0
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitac62bc8f89d6a3b2ea59cfb30e5ee3e0::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitac62bc8f89d6a3b2ea59cfb30e5ee3e0::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
