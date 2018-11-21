<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class stripeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'donationInput'=>'required|regex:/^[0-9]{1,3}\,[0-9]{2}$/',
        ];
    }
}
