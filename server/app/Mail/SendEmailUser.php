<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendEmailUser extends Mailable
{
    use Queueable, SerializesModels;

    public $email_for_user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($email_for_user)
    {
        $this->email_for_user = $email_for_user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Trimitere comanda')->view('email.email_for_user');
    }
}
