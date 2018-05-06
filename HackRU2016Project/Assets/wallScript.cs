using System.Collections;
using System.Collections.Generic;
using UnityEngine;



public class wallScript : MonoBehaviour {
    float time = 0;
    int lolghettoMethod = 0;
    
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
    public void OnCollisionEnter2D(Collision2D other)
    {
        
            Destroy(other.gameObject);
        
    }
    /* Attempt at timer
     * public bool IsTouching(Collider2D collider)
     {
         time += Time.deltaTime;
         if (time >= 3)
         {
             lolghettoMethod++;
             return true;
         }
         else
         {
             lolghettoMethod--;
             return false;
         }

     }
     public void OnCollisionEnter2D(Collision2D other) {
         if (lolghettoMethod > 0)
         {
             Destroy(other.gameObject);
         }
     } */






}

