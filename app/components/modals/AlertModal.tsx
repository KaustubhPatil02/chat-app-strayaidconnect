"use client";
import axios from 'axios';
import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

// Inside your component
import {
    FieldValues,
    SubmitHandler,
    } from 'react-hook-form';
import { User } from '@prisma/client';

import Input from "../inputs/Input";
import Modal from './Modal';
import Button from '../Button';
import { toast } from 'react-hot-toast';
import { CldImage } from 'next-cloudinary';

interface AlertModalProps {
    isOpen?: boolean;
    onClose: () => void;
    // users: User[];
}

const AlertModal: React.FC<AlertModalProps> = ({
    isOpen,
    onClose,
    // users = [],
}) => {
    // const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            members: []
        }
    });

// function MyComponent(){
    
//     const handleClick = () => {
//         smsScript();
//     }
//     };

// const locationLink = "https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393";
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);
      
        // const message = `Hello, proud owner of: ${numberPlate}. \nSince your two wheel was parked in a no parking area, we have towed it. \nHere the location for your towed vechicle: ${locationLink}`;
        try {
            const phoneNumbers = ["+919834388054"];
          const response = await axios.post('/api/sms', {
            body:   "Emergency Alert! Please check your app for more details",
            // to: "+919370957294",
            // to: "+919323141260"
            to: phoneNumbers.join(",")
          });
      
        //   if (response.data.status === 'success') {
        //     toast.success('SMS sent successfully!');
            // router.refresh();
        //     onClose();
        //   } else {
        //     throw new Error(response.data.message);
        //   }
        onClose();
        reset();
        } catch (error) {
        //   toast.error(`Error sending SMS: ${error.message}`);
        } finally {
          setIsLoading(false);
        }
      };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Send a alert via sms
                        </h2>
                        <div className="mt-10 flex flex-col gap-y-8">
                            {/* <span>Upload</span> */}
                        </div>
                    </div>
                </div>
                <Button disabled={isLoading} onClick={handleSubmit(onSubmit)} type="submit">
                    Send sms ALERT!
                </Button>
            </form>
        </Modal>
    )
}

export default AlertModal;