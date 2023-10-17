package assignment;

import java.util.Random;

public class Problem1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
     int arr[]= {1,2,3,4,5,6,7};
     
     Random generate=new Random();
     
     for(int i=0;i<arr.length;i++)
     {
    	 int randidx=generate.nextInt(arr.length);
    	 
    	 int temp=arr[i];
    	 arr[i]=arr[randidx];
    	 arr[randidx]=temp;
     }
     for(int i=0;i<arr.length;i++)
     {
    	 System.out.println(arr[i]);
     }
	}

}
