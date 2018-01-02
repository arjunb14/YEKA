<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Customer;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $customers = Customer::where('active', 1)
            // ->select('customer_name')
            ->orderBy('customer_name', 'asc')
            ->get();

        return response(['customer_list'=>$customers], 200)
            ->header('Content-Type', 'json');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return response(null, 404);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $customer = new Customer;

        $customer->customer_name = $request->customer_name;
        $customer->email = $request->email;
        $customer->address = $request->address;
        $customer->contact_number = $request->contact_number;
        $customer->contact_person = $request->contact_person;
        $customer->TIN = $request->TIN;
        $customer->GST = $request->GST;

        $customer->save();

        return response(null, 204);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $customer = Customer::where('active', 1)
                        ->find($id);

        if($customer){
            return response(['customer_details' => $customer], 200)
                ->header('Content-Type', 'json');
        } else {
            return response(['msg' => "User not found"], 404)
                ->header('Content-Type', 'json');
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return response(null, 404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $customer = Customer::where('active', 1)
                        ->find($id);

        if($customer){
            $customer->customer_name = $request->customer_name;
            $customer->email = $request->email;
            $customer->address = $request->address;
            $customer->contact_number = $request->contact_number;
            $customer->contact_person = $request->contact_person;
            $customer->TIN = $request->TIN;
            $customer->GST = $request->GST;

            $customer->save();

            return response(null, 204);
        } else {
            return response(['msg' => "User not found"], 404)
                ->header('Content-Type', 'json');
        }

        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $customer = Customer::find($id);

        $customer->active = 0;

        $customer->save();

        return response(null, 204);
    }
}
