<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    protected $table = 'users';

    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','last_name', 'pseudo' , 'birth_date' , 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function isSuperAdmin ()
        {
            if ($this->super_admin === 1)
                {
                    return true; 
                }
            else 
                {
                    return false;
                }
        }

    public function isAdmin ()
        {
            if ($this->admin === 1)
                {
                    return true; 
                }
            else 
                {
                    return false;
                } 
        }

    public function getId()
        {
          return $this->id;
        }
}
